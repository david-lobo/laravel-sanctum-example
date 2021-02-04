# Laravel Sanctum Example

This is an example of using Laravel Sanctum and React to create a Single Page Application (SPA).  The Laravel Authentication scaffolding (Login, Register, Forgot Password, Reset Password) are implemented in React.

## Laravel setup

### Install composer dependencies

```
cd laravel-sanctum
composer install
```

### Database Migrations

After installing composer dependencies, add your database credentials in `.env` file and then run migrations.

```
php artisan migrate
```

Now, in the terminal run `artisan serve` command. It will run the application at `http://127.0.0.1:8000` URL, and that URL path used in the React app.

```
php artisan serve
```

If you are running the Laravel API on a different URL path, then you need to update the URL path in the `src/apis/Api.js` of the React app.

## React Project setup

```
cd react-app
npm install
```

### Compiles and hot-reloads for development

```
npm start
```
