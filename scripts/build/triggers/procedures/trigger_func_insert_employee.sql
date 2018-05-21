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