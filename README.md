## Api Services: React + Node JS (Express) + MySQL + Phpmyadmin

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop a React + Node JS (Express)  + MySQL + Phpmyadmin Sample App directly on Okteto Cloud. The Sample App is deployed using a [kustomize](https://github.com/okteto/polling/blob/master/okteto-pipeline.yml). It creates the following components:

- A *React* based **frontend**.
- A splp as **api**.
- A [MySQL](https://www.mysql.com/) database.

## Tutorial

- Deploy the **Api Services With Nodejs** on your personal namespace by clicking on the following button:

<p align="center">
<a href="https://cloud.okteto.com/deploy">
  <img src="https://okteto.com/develop-okteto.svg" alt="Develop on Okteto">
</a>
</p>


- First setup deploy with CLI and clone this repo

```
  $ okteto deploy --namespace <yournamespace> 
```
- After deploy was succeed we should have services as follows:
```
  - Phpmyadmin Services on https://myadmin-<yourusername>.cloud.okteto.net
  - Myapps Services on https://myapps-<yourusername>.cloud.okteto.net/api
  - Frontend Services on https://myapps-<yourusername>.cloud.okteto.net
```

- To develop on the **nodejs** component:

```
    $ okteto up -f nodejs/okteto.yml
      ✓  Development container activated
      ✓  Files synchronized
         Namespace: yournamespace
         Name:      myapps
         Forward:   
                    8080 -> 8080

    Welcome to your development environment. Happy coding!
    githubid:nodejs okteto> npm run start:dev

```

- To develop on the **nodejs** component:

```
    $ okteto up -f nodejs/okteto.yml
      ✓  Development container activated
      ✓  Files synchronized
         Namespace: yournamespace
         Name:      myapps
         Forward:   
                    8080 -> 8080

    Welcome to your development environment. Happy coding!
    githubid:nodejs okteto> npm run start:dev

```
