CREATE OR REPLACE FUNCTION trigger_func_insert_employee()
RETURNS trigger AS
$BODY$
BEGIN
 IF NEW.ROLE = 'manager' then
        insert into managers values(new.ID,new.JOIN_DATE,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'seller' then
        insert into sellers values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'driver' then
        insert into drivers values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
    elsif NEW.ROLE = 'assistant' then
        insert into assistants values(new.ID,'null',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
   	end if;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_insert_location()
RETURNS trigger AS
$BODY$
BEGIN
	if new.TYPE = 'bus' then
        insert into BUS_STATIONS VALUES(new.ID,current_date,'null',current_timestamp,current_timestamp);
    elsif new.TYPE = 'repair' then
        insert into REPAIR_STATIONS VALUES(new.ID,'null',0,current_timestamp,current_timestamp);
    end if;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_update_employee()
RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.ROLE != OLD.ROLE THEN 
        CASE NEW.ROLE
            WHEN 'manager' then
            insert into managers values(new.ID,new.JOIN_DATE,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            WHEN 'driver' then
            insert into DRIVERS values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            when 'seller' then
            insert into SELLERS values(new.ID,0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
            ELSE
            insert into ASSISTANTS values(new.ID,'null',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
        END CASE;
        CASE OLD.ROLE
            WHEN 'manager' then
            delete from managers where id = old.ID;
            WHEN 'driver' then
            delete from DRIVERS where id = old.ID;
            when 'seller' then
            delete from SELLERS where id = old.ID;
            --when 'assistant' then
            else
            delete from ASSISTANTS where id = old.ID;
        END CASE;
    END IF;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE OR REPLACE FUNCTION trigger_func_update_location()
RETURNS trigger AS
$BODY$
BEGIN
	IF NEW.TYPE != OLD.TYPE THEN 
        CASE NEW.TYPE
            WHEN 'bus' then
                insert into BUS_STATIONS VALUES(new.ID,current_date,'null',current_timestamp,current_timestamp);
          	else 
                insert into REPAIR_STATIONS VALUES(new.ID,'null',0,current_timestamp,current_timestamp);
        END CASE;
        CASE OLD.TYPE
            WHEN 'bus' then
                delete from bus_stations where id = old.ID;
           	else 
                delete from REPAIR_STATIONS where id = old.ID;
        END CASE;
    END IF;
RETURN NEW;
END;
$BODY$ language plpgsql;

CREATE TRIGGER TRIGGER_INSERT_EMPLOYEE
AFTER INSERT ON employees
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_insert_employee();

CREATE TRIGGER TRIGGER_INSERT_LOCATION
AFTER INSERT ON LOCATIONS
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_insert_location();

CREATE TRIGGER TRIGGER_UPDATE_EMPLOYEE
AFTER UPDATE of ROLE ON EMPLOYEES
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_employee();

CREATE TRIGGER TRIGGER_UPDATE_LOCATION
AFTER UPDATE of TYPE ON LOCATIONS
FOR EACH ROW
EXECUTE PROCEDURE trigger_func_update_location();

