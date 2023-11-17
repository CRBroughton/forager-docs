# Features

The aim of Forager is to provide you with the tools required
for successful foraging. Currently, Forager supports and
provides the follownig:

- Pinning locations of interest (items) on the map
- Clustering locations of interest when zoomed out
- Adding reference images for items
- Setting a home location for a given user
- GPS location tracking

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
your travels. This can be done in the settings menu.

It is also possible to add arbitrary items to the map that
aren't associated with a given image; The 'Create' button
in the top-left corner of the contextual menu will reveal
the ability to add items with custom attributes. This can
be useful if you are wishing to add items to the map that
aren't necessarily foragable items, but items of interest,
such as landmarks. 

## Adding new items

To add a new item of interest, you can use the Images menu:

<!-- ADD UPDATED IMAGE INCLUDING THE CALENDAR COMPONENT -->

Every item (except arbitrary items) is associated with an image of the item in question.
In this menu, you can add new image with any publicly available URL,
as well as a name and colour, so you can easily identify the
item in question in menus, as well as on the map.

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

It is also possible to forage the item from this menu; When 
performing this action, the item will be set to a grey colour on
the map to indicate you have already foraged this item today. The colour
will be reset the following day.

This same contextual menu provides the option to delete a given item.
Please be aware that as of time of writing, there is no confirmation
of deletion. Deleting an item removes the item from the map, and
deletes all associated data from the database.