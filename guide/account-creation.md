# Account creation

With Forager installed, you can create your database account,
which will be an admin account. This account is used to manage
all of the data associated with Forager.

Visiting http://127.0.0.1:8090/_ will show the Pocketbase
registration page; At this point you can go ahead and create your
database admin account.

With your database admin account created, you can now create your Forager
account; Visiting http://127.0.0.1:8090 should now present you
with the Forager account create & login page
(note, these two URL's are slightly different).

When creating an account, you'll need to provide a Mapbox API access token
to enable all of Foragers features. You can get a Mapbox API access token
for free from [Mapbox](https://account.mapbox.com/).

By default, account creation is enabled; If you wish to disable
account creation, you can do so by visiting http://127.0.0.1:8090/_
, entering the 'Services' table on the left-hand side of the
Pocketbase interface. This table hosts all of the feature-flags
for Forager; Disabling the 'canCreateAccounts' flag and saving
will disable account creation from the Forager login page.
