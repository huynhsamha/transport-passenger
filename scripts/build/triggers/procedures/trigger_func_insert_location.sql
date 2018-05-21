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