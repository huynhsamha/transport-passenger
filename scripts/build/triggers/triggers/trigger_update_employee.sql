CREATE TRIGGER TRIGGER_UPDATE_EMPLOYEE
AFTER UPDATE of ROLE ON EMPLOYEES
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_employee();