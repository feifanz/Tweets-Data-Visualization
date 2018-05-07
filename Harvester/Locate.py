import fiona
from shapely.geometry import Point, shape

# read shape file
sa4 = fiona.open("sa4_melb.shp", 'r')

# build suburb dictionary
sa4_Dict = {}
for i in range(len(sa4)):
    subBoundary = shape(sa4[i]['geometry'])
    sa4_Dict[sa4[i]['properties']['sa4_name16']] = subBoundary

print("Total", len(sa4_Dict))
print("Dictionary: ", sa4_Dict)

# give label of suburb
def give_suburb(coordinates):
    if coordinates:
        point = Point(coordinates)
        for item in sa4_Dict:
            if point.within(sa4_Dict[item]):
                sa4 = item
                return sa4

