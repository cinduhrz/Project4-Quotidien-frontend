# Quotidian
<!-- Github Intro -->
Welcome to Quotidian - a full CRUD app for keeping track of your daily to-do lists. Built on a Django backend (with a postgreSQL database) and React frontend, Quotidian keeps track of all your day's to-do's, reminders, and events on a single list. A special section for all the things you've put the backburner persists throughout each note until you check it off - taking up less space in your brain, because you can rest assured you won't forget about them. With Quotidian, you'll always know exactly what you need to do and remember, everyday.

Deployed Website Link

<!-- Marketing Intro -->
<!-- Welcome to Quotidian - your brain's super organized daily assistant. Stay on top of your day by keeping track of all your to-do's, reminders, and events for the day on a single note. A special section for all the things you've put the backburner persists throughout each note until you check it off - and they'll take up less space in your brain, because you can rest assured you won't forget about them.With Quotidian, you'll always know exactly what you need to do and remember, everyday. -->

#### Technologies Used

##### Backend
- Django
- Python
- PostgreSQL
- Render

##### Frontend
- Javascript
- HTML
- CSS
- Netlify

#### Component Architecture
```mermaid
flowchart TD

    App --> Header
    App --> Outlet
    App --> Footer
    Header --> Nav
    Nav --> id1[Today's Note]
    Nav --> id2[All Notes]
    Outlet --> id3[url]
    Outlet --> id4[url]
    Outlet --> id5[url]
    Outlet --> id6[url]
    Outlet --> id7[url]
```

#### Backend Route Table
| Route Name |     URL    | HTTP Verb |        Description         |
|------------|------------|-----------|----------------------------|
|   Index    | /todos     |    GET    | Displays list of todos     |
|   Show     | /todos/:id |    GET    | Shows a specific todo      |
|   Create   | /todos     |    POST   | Adds new todo to database  |
|   Update   | /todos/:id |    PUT    | Updates a specific todo    |
|   Delete   | /todos/:id |   DELETE  | Deletes a specific todo    |

#### Frontend Route Table
|    Route     | Element |    Loader   |      Action      |                   Description                  |
|--------------|---------|-------------|------------------|------------------------------------------------|
|      /       | Index   | indexLoader |                  | Loads up all todos                             |
| /todo/:id    | Show    | todoLoader  |                  | Loads up a specific todo                       |
| /create      | Create  |             | todoCreateAction | Handle submission of a create form for todos   |
| /update/:id  | Create  |             | todoUpdateAction | Handle submission of an update form for todos  |
| /delete/:id  | Create  |             | todoDeleteAction | Handle submission of a delete form for todos   |

#### Model
![ERD Diagram](https://i.imgur.com/9RhaZn1.png)

#### User Stories


#### Wireframes

##### Mobile

##### Desktop


#### Daily Plan

#### Stretch Goals
- Create list model (2nd model)
- User Auth

#### Future Goals
- sync with Google/Apple calender for event reminders

##### Links
Deployed Website Link
Trello Board Link