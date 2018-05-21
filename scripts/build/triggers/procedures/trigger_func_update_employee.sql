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