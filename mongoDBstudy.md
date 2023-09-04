[SQL vs NoSQL]

SQL: record, table

multi-statement transaction,legacy system

scale up

Data Redundancy X

focusing on relation

Schema, relation O


NoSQL: document, collection, key-value, wide-column store

unstructured data

scale out

Data Redundancy O

focusing on object

Schema, relation X



[SQL and RDB]
relational database 

Structured Query Language

DDL(Data Definition Language)
CREATE, DROP, ALTER... DB Object

DML(Data Manipulation Language)
SELECT, INSERT, UPDATE... DB

DCL(Data Control Language)
GRANT, DENY, REVOKE



[MongoDB]

ObjectId(<value>)

return a new ObjectId. The 12-byte ObjectId consists of

-A 4-byte timestamp, representing the ObjectId's creation, measured in seconds since the Unix epoch.

-A 5-byte random value generated once per process. This random value is unique to the machine and process.

-A 3-byte incrementing counter, initialized to a random value.

[methods]
ObjectId().toString()
returns the ObjectId as a hexadecimal string


[Modeling Data with MongoDB]

Polymorphism

Embedding

Referencing

Performance


embedding vs referencing

[] -> may exceed the size & slow
->outlier pattern

[Avoiding Anti-Patterns in MongoDB]

massive arrays: storing massive, unbounded arrays in your documents

massive numbers of collections: storing a massize number of collections in your database

unnecessary indexes

bloated documents

separating data that is accessed together