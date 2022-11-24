# Javascript Examples

### How to solve the mysql module not found issue?
1. docker container prune -f # clean up exited containers
2. docker run --name lina -p 3306:3306 -e MYSQL_ROOT_PASSWORD=lina -d mysql # set username(root) password:lina, 3306:3306 used as communication  docker machine and your host machine, 3306:3306 mysql by default TCP port.
3. docker ps # verify if the docker container is running.
4. docker exec -it fa9 /bin/bash  # -i is interactive -t means console, 'fa9' is from docker ps, you must lookup this in docker ps first, fa9 is a prefix of the docker container ID you will enter the docker container after step 4, it appears you loggin another machine.
5. mysql --user root --database mysql --password # use mysql in the container to logon my sql server in the container

### use mysql
mysql> show databases
    -> ;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql>

mysql> show tables
    -> ;
+------------------------------------------------------+
| Tables_in_mysql                                      |
+------------------------------------------------------+
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| ndb_binlog_index                                     |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
| user                                                 |
+------------------------------------------------------+
38 rows in set (0.00 sec)

mysql>
mysql> describe servers;
+-------------+-----------+------+-----+---------+-------+
| Field       | Type      | Null | Key | Default | Extra |
+-------------+-----------+------+-----+---------+-------+
| Server_name | char(64)  | NO   | PRI |         |       |
| Host        | char(255) | NO   |     |         |       |
| Db          | char(64)  | NO   |     |         |       |
| Username    | char(64)  | NO   |     |         |       |
| Password    | char(64)  | NO   |     |         |       |
| Port        | int       | NO   |     | 0       |       |
| Socket      | char(64)  | NO   |     |         |       |
| Wrapper     | char(64)  | NO   |     |         |       |
| Owner       | char(64)  | NO   |     |         |       |
+-------------+-----------+------+-----+---------+-------+
9 rows in set (0.00 sec)

mysql>
mysql> select * from servers;
Empty set (0.00 sec)

mysql> select * from user
    -> ;

mysql> select User,Host,File_priv from user;
+------------------+-----------+-----------+
| User             | Host      | File_priv |
+------------------+-----------+-----------+
| root             | %         | Y         |
| mysql.infoschema | localhost | N         |
| mysql.session    | localhost | N         |
| mysql.sys        | localhost | N         |
| root             | localhost | Y         |
+------------------+-----------+-----------+
5 rows in set (0.00 sec)
