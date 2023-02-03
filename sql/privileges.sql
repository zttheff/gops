use mysql
create user hiops identified by 'Passw0rd';
grant all on *.* to hiops@'%' identified by 'Passw0rd' with grant option;
flush privileges;
