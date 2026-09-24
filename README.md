# AngularDynamicRouting

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

# Angular Dynamic Routing

This project is an Angular application that demonstrates dynamic routing,
route parameters, shared services, and data-driven student profiles.

## What This Project Demonstrates

- Angular component-based application structure
- Dynamic routes with route parameters
- Reading an ID with `ActivatedRoute`
- Sharing student data through `StudentService`
- Rendering lists with Angular control flow and reusable components
- Responsive styling with Tailwind CSS

## How It Works

1. `StudentService` stores the student records.
2. The Home component reads the records from the service and displays student cards.
3. Each card links to a dynamic URL using the student's ID:

	```html
	[routerLink]="['/profile', student.id]"
	```

4. Angular matches the route `profile/:id`.
5. The Profile component reads the ID from the URL:

	```ts
	const id = Number(this.route.snapshot.paramMap.get('id'));
	```

6. The matching student is selected from the shared service data and displayed.

For example, `/profile/102` displays the profile for the student whose ID is
`102`.

## Application Routes

| URL | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Displays all students |
| `/profile/:id` | Profile | Displays one student using a dynamic ID |
| `/about` | About | Explains the project and its data flow |

The current student IDs are `101`, `102`, `103`, and `104`.

## Technologies Used

- Angular 22
- Angular Router
- TypeScript
- Tailwind CSS
- RxJS

## Development Server

Install the dependencies and start the local development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in a browser. The application reloads when source
files change.

## Building

To create a production build:

```bash
npm run build
```

The compiled files are written to the `dist/` directory.

## Running Unit Tests

Run the Angular test suite with:

```bash
npm test
```

## Project Structure

```text
src/app/
  about/              Project explanation and routing walkthrough
  header/             Shared navigation header
  home/               Student list
  profile/            Dynamic student profile page
  student/            Reusable student display component
  app.routes.ts       Application route configuration
  student.service.ts  Shared student data
```

## Why Use IDs in Routes?

The application uses a student ID instead of a name in the URL because IDs are
expected to be unique and are less likely to change:

```text
/profile/102
```

This is more reliable than a name-based route such as:

```text
/profile/Rahul-Sharma
```
