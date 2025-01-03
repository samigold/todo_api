# Todo App API

This is a simple Todo App API that allows users to manage their tasks. The API provides endpoints to create, read, update, and delete tasks.

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a single task by ID
- Update a task by ID
- Delete a task by ID

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todo_app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todo_app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the API

To start the API server, run:
```sh
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Create a new task

- **URL:** `/tasks`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "title": "Task title",
        "description": "Task description"
    }
    ```
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Task title",
        "description": "Task description",
        "completed": false
    }
    ```

### Retrieve all tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Task title",
            "description": "Task description",
            "completed": false
        },
        ...
    ]
    ```

### Retrieve a single task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Task title",
        "description": "Task description",
        "completed": false
    }
    ```

### Update a task by ID

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
        "title": "Updated task title",
        "description": "Updated task description",
        "completed": true
    }
    ```
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Updated task title",
        "description": "Updated task description",
        "completed": true
    }
    ```

### Delete a task by ID

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "message": "Task deleted successfully"
    }
    ```

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [info@samuelmadu.com](mailto:info@samuelmadu.com).