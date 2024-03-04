# TasksManager

This project uses Angular version 17.2.2.

# Requirements
It should be possible to:

1. list/create/edit/delete tasks. Task minimal data:
   - name
   - description 
   - date of its creation 
   - date of its modification 
   - state (one of 'in queue' | 'in progress' | 'done')

2. list/create/edit/delete users. User minimal data:
   - name

3. Tasks can be assigned to users
    - A task can be assigned to one user only. 
    - A task which is not assigned to any user can take 'in queue' state only. 
    - The same user cannot be assigned to more than one task which is ‘in progress’.

4. When listing the tasks it should be visible their names, dates of creation and modification, assigned users and states at least

5. When listing the users it should be visible their names and assigned tasks at least

6. Data storing can be done into memory or browser's storage.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
