SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET default_tablespace = '';

SET default_with_oids = false;


---
--- drop tables
---

DROP TABLE IF EXISTS Gods;
DROP TABLE IF EXISTS Creatures;
DROP TABLE IF EXISTS Lore;

--
-- Name: Gods; Type: TABLE; Schema: public; Owner: -; Tablespace:
--

CREATE TABLE Gods (
    id smallint NOT NULL UNIQUE,
    name character varying(40) NOT NULL,
    description character varying(500)
);

CREATE TABLE Creatures (
    id smallint NOT NULL UNIQUE,
    name character varying(40) NOT NULL UNIQUE,
    description character varying(500)
);

CREATE TABLE Lore (
    id smallint NOT NULL UNIQUE,
    name character varying(40) NOT NULL UNIQUE,
    description character varying(500)
);


INSERT INTO Gods (id, name, description) VALUES (1, 'Oden', 'The god that rules all gods');
INSERT INTO Gods (id, name, description) VALUES (2, 'Freja', 'The god of lust');
INSERT INTO Gods (id, name, description) VALUES (3, 'Tor', 'Thunder gud');
INSERT INTO Gods (id, name, description) VALUES (4, 'Hades', 'The ruler of Hell');
INSERT INTO Gods (id, name, description) VALUES (5, 'Frej', 'Write something here');

INSERT INTO Creatures (id, name, description) VALUES (1, 'Ash Zombie', 'Very dangerous if meet if multiple');
INSERT INTO Creatures (id, name, description) VALUES (2, 'Bat', 'Sleeps in caves at day, hunts at night');
INSERT INTO Creatures (id, name, description) VALUES (3, 'Bear', 'Wanders alone in the forest. Beware of them when they have kids');
INSERT INTO Creatures (id, name, description) VALUES (4, 'Icebear', 'Even more dangerous than bears');
INSERT INTO Creatures (id, name, description) VALUES (5, 'Skeleton Bear', 'Rare variant of bear. Flee immediatly if you see one');
INSERT INTO Creatures (id, name, description) VALUES (6, 'Vampire', 'Often seen sucking dead boides');
INSERT INTO Creatures (id, name, description) VALUES (7, 'Wolf', 'Hunts in packs. Can be domesitated');

INSERT INTO Lore (id, name, description) VALUES (1, 'Bow', 'One bow to rule them all');
INSERT INTO Lore (id, name, description) VALUES (2, 'Club', 'Weapon with surprisingly dangerous power');
INSERT INTO Lore (id, name, description) VALUES (3, 'Hammer', 'Heavy, but effective');
INSERT INTO Lore (id, name, description) VALUES (4, 'Sword', 'Swift and reliable');



