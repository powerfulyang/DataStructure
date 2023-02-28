export class EventEmitter {
  private _events = new Map();

  on(eventName, callback) {
    if (!this._events.has(eventName)) {
      this._events.set(eventName, []);
    }
    this._events.get(eventName).push(callback);
  }

  emit(eventName, ...args) {
    if (this._events.has(eventName)) {
      this._events.get(eventName).forEach((callback) => {
        callback(...args);
      });
    }
  }

  off(eventName, callback) {
    if (this._events.has(eventName)) {
      this._events.set(
        eventName,
        this._events.get(eventName).filter((cb) => cb !== callback),
      );
    }
  }

  once(eventName, callback) {
    const wrap = (...args) => {
      callback(...args);
      this.off(eventName, wrap);
    };
    this.on(eventName, wrap);
  }

  removeAllListeners(eventName) {
    if (this._events.has(eventName)) {
      this._events.set(eventName, []);
    }
  }
}
