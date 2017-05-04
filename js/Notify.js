Notify = {
    isSupported: true,
    isGranted: false,
    isBlocked: false,
    init: function() {
        this.browserSupport();
        if (this.isSupported) {
            this.getPermission();
        }
    },
    browserSupport: function() {
        if (!("Notification" in window)) {
            this.isSupported = false;
        }
    },
    getPermission: function() {
        if (this.isSupported == false) return;
        if (Notification.permission === 'granted') {
            this.isGranted = true;
            return;
        } else if (Notification.permission === 'denied') {
            this.isBlocked = true;
            return;
        }
        Notification.requestPermission();
    },
    send: function (title, body, icon, time) {
        if (typeof(time) === 'undefined') time = 3000;
        var notif = new Notification(title, {'body': body, 'icon': icon});
        setTimeout(notif.close.bind(notif), time);
    }
};