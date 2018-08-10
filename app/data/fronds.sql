CREATE DATABASE fronds_db;
USE fronds_db;

-- Create the table tasks.
CREATE TABLE fronds
(
id INT NOT NULL AUTO_INCREMENT,
frond VARCHAR (100) NOT NULL,
needs_light INT (2) NOT NULL, -- My house has a lot of light
remember_water INT (2) NOT NULL, -- I remember to water plants
deserty INT (2) NOT NULL, -- I like plants that are more desert-y
want_clean_air INT (2) NOT NULL, -- I want to clean the air in my house
remember_care INT (2) NOT NULL, -- I remember to take care of plants
leafy_plants INT (2) NOT NULL, -- I like leafy plants
like_succ INT (2) NOT NULL, -- I like succulents
like_prop INT (2) NOT NULL, -- I like to propegate plants
long_vines INT (2) NOT NULL, -- I want a plant that has long vines
modern_plant INT (2) NOT NULL, -- I want a modern-looking plant -->

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO fronds (frond) VALUES ("");

select * from fronds;