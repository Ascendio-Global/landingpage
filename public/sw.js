// Placement Portal Service Worker for Native Web Push and Calendar Integration
//
// Lifecycle handlers below ensure the worker takes control on first install
// (otherwise pushManager.subscribe right after registration can target a not-
// yet-controlling worker). No caching strategies — the app is online-only.

self.addEventListener('install', function (event) {
  // Activate immediately on first install so push subscription can happen
  // without waiting for a page navigation.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  // Take over any open tabs that loaded before this SW was registered.
  event.waitUntil(self.clients.claim());
});

// No-op fetch listener. Chrome 88+ refuses to fire `beforeinstallprompt`
// (the PWA install banner / button) unless the SW has a registered `fetch`
// handler — even if the handler doesn't actually intercept anything. We let
// every request fall through to the network by simply not calling
// event.respondWith().
self.addEventListener('fetch', function (event) {
  // Intentionally empty — request proceeds normally.
});

self.addEventListener('push', function (event) {
  if (!event.data) {
    console.log('[Service Worker] Push event contains no data.');
    return;
  }

  let data = {};
  try {
    data = event.data.json();
  } catch (err) {
    console.error('[Service Worker] Failed to parse push data as JSON:', err);
    data = {
      title: 'New Notification',
      body: event.data.text()
    };
  }

  const title = data.title || 'New Notification';
  const options = {
    body: data.body || '',
    icon: '/favicon.ico',  
    badge: '/favicon.ico',
    tag: data.tag || 'placement-notif',
    renotify: true,
    data: {
      action_url: data.action_url || '/',
      event: data.event || null
    }
  };

  // If there's an event associated (e.g. drive schedule, interview) add Google Calendar button
  if (data.event && data.event.startDateTime) {
    options.actions = [
      {
        action: 'add_to_calendar',
        title: '📅 Add to Google Calendar'
      }
    ];
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  const notification = event.notification;
  const action = event.action;
  const notifData = notification.data || {};

  notification.close();

  if (action === 'add_to_calendar' && notifData.event) {
    // Generate pre-filled Google Calendar event template URL
    const calUrl = generateGoogleCalendarUrl(notifData.event);
    
    event.waitUntil(
      clients.openWindow(calUrl)
    );
  } else {
    // Navigate to the action URL
    const targetUrl = notifData.action_url || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.navigate(targetUrl).then(c => c.focus());
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
    );
  }
});

// Google Calendar URL generator helper
function generateGoogleCalendarUrl(event) {
  const base = "https://calendar.google.com/calendar/render";
  const action = "TEMPLATE";
  
  const formatDateTime = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    } catch (e) {
      // Fallback
      return dateStr.replace(/[-:]/g, "");
    }
  };
  
  const start = formatDateTime(event.startDateTime);
  const end = event.durationMinutes 
    ? formatDateTime(new Date(new Date(event.startDateTime).getTime() + event.durationMinutes * 60 * 1000).toISOString())
    : formatDateTime(new Date(new Date(event.startDateTime).getTime() + 60 * 60 * 1000).toISOString());
  
  const params = new URLSearchParams({
    action,
    text: event.title,
    details: event.description,
    dates: `${start}/${end}`,
  });
  
  if (event.location) {
    params.set("location", event.location);
  }
  
  return `${base}?${params.toString()}`;
}
