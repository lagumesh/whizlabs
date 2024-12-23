import React, { useEffect, useRef } from 'react';
import Gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const Taskbar = () => {
  const ganttContainer = useRef(null);

  useEffect(() => {
    // Attach Gantt chart to the container
    Gantt.init(ganttContainer.current);

    // Add custom color handling for each task
    Gantt.attachEvent('onBeforeTaskRender', function (task) {
      // Apply the custom color from the task data
      if (task.color) {
        task.color = task.color; // Background color
        task.textColor = '#FFFFFF'; // Text color
      }
      return true;
    });

    // Provide sample tasks
    Gantt.parse({
      data: [
        { id: 1, text: 'Create User Stories', start_date: '2023-07-01', duration: 5, progress: 0.6, color: '#FF5733' },
        { id: 2, text: 'Create User Flows', start_date: '2023-07-07', duration: 4, progress: 0.4, color: '#3498DB' },
        { id: 3, text: 'Create Wireframes', start_date: '2023-07-12', duration: 3, progress: 0.7, color: '#8E44AD' },
      ],
    });
  }, []);

  return <div className='mt-3' ref={ganttContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Taskbar;
