# jdv-map

AngularJS application frontend for a local jboss data virtualization instance. Reads ODATA in form of REST and displays as a Leaflet api OpenStreet map and Smart-Table grid.

## Build and Run
In the jdv-map directory

`npm install`

`bower install`

`grunt client`

## Editing
The service url and the auth credentials that pulls the data is located in

`client/app/components/map/datavirt-service.js`

The proxy that allows the cross domain query is located in
'Gruntfile.js'

By default the context is on a local server on port 8080

## References
[JBoss Data Virtualization](https://www.redhat.com/en/technologies/jboss-middleware/data-virtualization)

[AngularJS](https://angular.io/)

[UI Bootstrap](https://angular-ui.github.io/bootstrap/)

[UI-Leaflet](http://angular-ui.github.io/ui-leaflet/#!/)

[Smart Table](http://lorenzofox3.github.io/smart-table-website/)
