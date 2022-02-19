# NestJS GraphQL API

## Overview

This repository contain GraphQL API created to study GraphQL with basic Relational CRUD based on database design below

## Database Design

### SQL Database

![Database-design](https://github.com/bondopangaji/NestJS-Cat-GraphQL-API/blob/main/cat-rdd.png)

### No-SQL Database

**cats**

```json
{
  "_id": "ObjectId",
  "name": "String",
  "date_of_birth": "Date",
  "sex": "String",
  "breed": {
    "_id": "ObjectId",
    "name": "String"
  },
  "description": "String",
  "note": "String",
  "created_at": "Date",
  "updated_at": "Date"
}
```

**breeds**

```json
{
  "_id": "ObjectId",
  "name": "String",
  "created_at": "Date",
  "updated_at": "Date"
}
```

## License

- [MIT License](https://choosealicense.com/licenses/mit/)

## Author

- [Bondo Pangaji](https://github.com/bondopangaji)
