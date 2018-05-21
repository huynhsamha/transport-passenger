 create or replace function show_message(error_message text) 
 returns void 
 as $$
 begin
     raise notice '%', error_message;
 end;
 $$ language plpgsql;
