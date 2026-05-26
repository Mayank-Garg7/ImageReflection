import React, { useContext } from "react";
import Card from "../../../shared/Card";
import TodoContext from "../context/TodoContext";

function TaskList({ item }) {
  const { handleStatusChange } = useContext(TodoContext);

  const statusStyles = {
    pending: "bg-amber-50 text-amber-700 border border-amber-200",
    completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const priorityStyles = {
    high: "text-red-600",
    medium: "text-amber-600",
    low: "text-emerald-600",
  };

  return (
    <Card>
      <div className="flex flex-col gap-5">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
              {item.text}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage and track task progress
            </p>
          </div>

          <span
            className={`
              px-3 py-1
              rounded-full
              text-xs
              font-semibold
              capitalize
              whitespace-nowrap
              ${statusStyles[item.status]}
            `}
          >
            {item.status}
          </span>
        </div>

        {/* Priority & Action */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Priority
            </p>

            <p
              className={`
                mt-1
                text-sm
                font-semibold
                capitalize
                ${priorityStyles[item.priority]}
              `}
            >
              {item.priority}
            </p>
          </div>

          <div className="min-w-42.5">
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Update Status
            </label>

            <select
              value={item.status}
              onChange={(e) => handleStatusChange(e, item.id)}
              disabled={item.status === "completed"}
              className="
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                py-2.5
                text-sm
                font-medium
                text-slate-700
                shadow-sm
                outline-none
                transition
                duration-200
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                disabled:cursor-not-allowed
                disabled:bg-slate-100
                disabled:text-slate-400
              "
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TaskList;