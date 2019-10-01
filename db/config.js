CREATE TABLE cowlist
(
  id              INT unsigned NOT NULL AUTO_INCREMENT, # Unique ID for the record
  name            VARCHAR(100) NOT NULL UNIQUE,         # Name of the cow
  description     VARCHAR(150) NOT NULL,                # Description of the cow
  PRIMARY KEY     (id)                                  # Make the id the primary key
);