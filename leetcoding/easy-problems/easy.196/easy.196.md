# Delete Duplicate Emails

## Code

```sql
DELETE FROM Person
WHERE Id NOT IN (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
)
```

## Explanation

- Inner subquery: `SELECT MIN(id) FROM Person GROUP BY email`
    - Groups rows by email
    - Selects the minimum (smallest) id for each email
    - Giving the ids to keep
- DELETE statement: removes all rows where the id is NOT in that list of minimum IDs