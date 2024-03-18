function undoRedo(object) {
  let history = [];
  let redoHistory = [];

  return {
    set: function (key, value) {
      let oldValue = object[key];
      let newAction = {
        type: "set",
        key: key,
        oldValue: oldValue,
        newValue: value,
      };
      history.push(newAction);
      redoHistory = []; // clear redo history after new action
      object[key] = value;
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      if (object.hasOwnProperty(key)) {
        let deletedValue = object[key];
        let newAction = {
          type: "del",
          key: key,
          oldValue: deletedValue,
        };
        history.push(newAction);
        delete object[key];
        redoHistory = []; // clear redo history after new action
      }
    },

    undo: function () {
      if (history.length === 0) {
        throw new Error("No operation to undo");
      }
      let action = history.pop();
      redoHistory.push(action);

      if (action.type === "set") {
        if (action.oldValue === undefined) {
          delete object[action.key];
        } else {
          object[action.key] = action.oldValue;
        }
      } else if (action.type === "del") {
        object[action.key] = action.oldValue;
      }
    },

    redo: function () {
      if (redoHistory.length === 0) {
        throw new Error("No operation to redo");
      }
      let action = redoHistory.pop();

      if (action.type === "set") {
        object[action.key] = action.newValue;
      } else if (action.type === "del") {
        delete object[action.key];
      }

      // Push the action back onto the history stack as redo is just another kind of set/del
      history.push(action);
    },
  };
}

// 2й вариант

function undoRedo(obj) {
  var commands = [];
  var index = -1;

  function add(cmd) {
    commands.splice(index + 1, commands.length - index);
    commands.push(cmd);
    index = commands.length - 1;
  }

  return {
    get: function (key) {
      return obj[key];
    },
    set: function (key, value) {
      var prev = obj[key];
      var cmd = {
        exec: function () {
          obj[key] = value;
        },
        undo: function () {
          obj[key] = prev;
        },
      };

      add(cmd);
      cmd.exec();
    },
    del: function (key) {
      var prev = obj[key];
      var cmd = {
        exec: function () {
          delete obj[key];
        },
        undo: function () {
          obj[key] = prev;
        },
      };

      add(cmd);
      cmd.exec();
    },
    undo: function () {
      var cmd = commands[index];
      if (cmd === void 0) throw new Error();

      cmd.undo();
      index--;
    },
    redo: function () {
      var cmd = commands[index + 1];
      if (cmd === void 0) throw new Error();

      cmd.exec();
      index++;
    },
  };
}
