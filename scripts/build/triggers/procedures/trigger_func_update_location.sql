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