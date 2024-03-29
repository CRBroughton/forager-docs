# Features

The aim of Forager is to provide you with the tools required
for successful foraging. Currently, Forager supports and
provides the following:

- Pinning locations of interest (items) on the map
- Clustering locations of interest when zoomed out
- Adding reference images for items
- Setting a home location for a given user
- Adding Landmarks to the map
- GPS location tracking
- Server status updates

## Side menu

With your account created and a home location set, you'll
now be able to see the side menu button on the right most side
of the screen. Pressing this button will toggle the hidden menu.
This menu is home to both functions, as well
as menus you'll be able to open and interact with.

The below lists and details each item:

- Settings - Opens the settings menu
- Home - Returns your map position to your home location
- Logout - Logs you out of Forager and returns you to the
login page

In the future, this menu may be home to additional functionality.

## Pinning items

Once you have found an item of interest whilst foraging,
and you wish to save the location to your account, you can
simply click on the map to add the position of the item.

A contextual menu will show, asking you which sort of item
you are wishing to add:

<div class="custom-image">
    <img src="/add-item.png" width="400" loading="lazy" />
</div>

By default, this menu will be empty as you'll be required
to add the items of interest you're likely to find throughout
your travels. This can be done in the Settings menu.

## Adding new items

To add a new item of interest, you can use the Images menu:

<div class="custom-image">
    <img src="/images-menu.png" width="400" loading="lazy" />
</div>

Every item is associated with an image of the item in question.
In this menu, you can add new image with any publicly available URL,
as well as a name and colour, so you can easily identify the
item in question in menus, as well as on the map. Every item
should be set with a start month and an end month, signifying
when the item is expected to be in season and fall out of season.

Once the new image has been added, it will be immediately available to use.

Any saved images can be removed with the cross in the top-right 
hand corner. It should be noted that removing the image here,
doesn't remove the images for any items already on the map.

## Reviewing an item

With any item on the map, you can review the item in question:

<div class="custom-image">
    <img src="/review-item.png" width="400" loading="lazy" />
</div>

Here, the contextual menu will show the following information:

- The items name
- The items image
- When the item was last foraged
- When the item is first in season
- When the item falls out of season

It is also possible to forage the item from this menu; when 
performing this action, the item will be set to a grey colour on
the map to indicate you have already foraged this item today. The colour
will be reset the following day.

This same contextual menu provides the option to delete a given item.
Please be aware that as of time of writing, there is no confirmation
of deletion. Deleting an item removes the item from the map, and
deletes all associated data from the database.

## Landmarks

Similar to items, landmarks can be placed onto the map via the
popup contextual menu with the plus icon. Once clicked, the
Landmarks menu will appear:

<div class="custom-image">
    <img src="/create-landmark-menu.png" width="400" loading="lazy" />
</div>

Once added, the landmark will
appear on the map:

<div class="custom-image">
    <img src="/landmark.png" width="400" loading="lazy" />
</div>

Landmarks can be clicked, revealing
the landmark menu. From here,
you can delete a given landmark:

<div class="custom-image">
    <img src="/landmark-menu.png" width="400" loading="lazy" />
</div>


## GPS tracking

Forager features GPS tracking, allow you to track your location
as you travel. Simply press the GPS button in the top-left corner
to enable GPS tracking. All tracking is performed locally on your
devices GPS. 

Dragging on the map will remove follow-mode. To re-enable
follow-mode, simply press the GPS button again.

To turn off GPS tracking, press the button until the GPS tracking
button is no longer blue.

## Server connection

In the top-left corner of the UI, there is a green or red dot
denoting the current server status. If the dot is green, Forager
is able to detect a healthy connection to your server.

If the dot is red, Forager is unable to communicate with your
server; Any actions taken whilst this dot is red may function
incorrectly, such as attempting to save new items or landmarks
to your account.

