CREATE TABLE us_parks (
		id SERIAL DEFAULT nextval('us_parks_id_seq'::regclass) NOT NULL,
		name TEXT(2147483647) NOT NULL,
		pos TEXT(2147483647),
		lat NUMERIC(131089 , 0) NOT NULL,
		lon NUMERIC(131089 , 0) NOT NULL,
		rating INT4
	);

CREATE UNIQUE INDEX us_parks_pkey ON us_parks (id ASC);

ALTER TABLE us_parks ADD CONSTRAINT us_parks_pkey PRIMARY KEY (id);

