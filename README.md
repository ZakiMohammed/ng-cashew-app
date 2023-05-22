# 🥜 NgCashew

Check out the CodeOmelet blog post for this project.

Link: https://codeomelet.com/posts/cache-angular-http-request-using-ngneat-cashew

___

NgCashew app to explore the air light `@ngneat/cashew` package to cache Angular HTTP requests powered by Cirrus UI.

## Run Project

```
npm start
```

## Add Cashew Package

```
npm i @ngneat/cashew
```

## Add to App Modules

```
@NgModule({
  imports: [
    HttpClientModule, 
    HttpCacheInterceptorModule.forRoot(), 
    ...
  ],
})
```

## Add to HTTP Service

Configure the options object:

```
private options = {
  context: withCache()
};
```

Pass it to `get` method:

```
getUsers() {
  const url = `${this.url}${this.userUrl}`;
  return this.http.get<any>(url, this.options);
}
```