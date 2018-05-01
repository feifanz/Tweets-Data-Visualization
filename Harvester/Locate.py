import shapefile
from shapely.geometry import Point, Polygon

# read shape file
shape = shapefile.Reader("melb_suburbs.shp")

# a list of records, each record represents a suburb
records = shape.records()
shapes = shape.shapeRecords()

# build suburb dictionary
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

# give label of suburb
def give_suburb(coordinates):
    if coordinates:
        point = Point(coordinates)
        for item in suburb_Dict:
            if point.within(suburb_Dict[item]):
                sub = item
                return sub

