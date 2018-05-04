from couchdb import Server
import shapefile
from shapely.geometry import Point, Polygon


# couchDB server
server = Server('http://admin:sweetheart@115.146.86.47:5986/')
try:
    db = server['tweets_search_mel']
except:
    db = server.create('tweets_search_mel')

# read shape file
shape = shapefile.Reader("suburbs.shp")

# suburb boundary points tuple for a certain suburb, eg. first element of the shapeRecords
shapes = shape.shapeRecords()

# a list of records, each record represents a suburb
records = shape.records()

suburb_Dict = {}

for i in range(len(shape.shapeRecords())):
    try:
        subBoundary = Polygon(shapes[i].shape.__geo_interface__['coordinates'][0])
    except:
        subBoundary = Polygon((shape.shapeRecords()[i].shape.__geo_interface__['coordinates'][0][0]))
    suburb_Dict[records[i][-1]] = subBoundary
    print(records[i][-1])

print("Total", len(suburb_Dict))
print("Dictionary: ", suburb_Dict)

# create suburbs count dictionary
sub_count = {}
for key in db:
    if db[key]["coordinates"] is not None:
        coordinate = db[key]["coordinates"]["coordinates"]
        point = Point(coordinate)
        for item in suburb_Dict:
            # check whether the point is within the scope of suburb
            if point.within(suburb_Dict[item]):
                ndoc = db[key]
                ndoc['suburb'] = item
                db[ndoc.id] = ndoc
                sub_count[item] += 1
                break
    else:
        continue


