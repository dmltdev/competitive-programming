CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS INT AS $$
BEGIN
  IF N < 1 THEN
    RETURN NULL;
  END IF;

  RETURN (
      SELECT DISTINCT Salary
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET N - 1
  );
END;
$$ LANGUAGE plpgsql;
