CREATE TRIGGER TRIGGER_UPDATE_LOCATION
AFTER UPDATE of TYPE ON LOCATIONS
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_location();