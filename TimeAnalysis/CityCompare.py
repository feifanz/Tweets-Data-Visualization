import json

with open('Search_Syd Time.json','r') as json_data:
    file = json.load(json_data)

# {hour: count, ..., hour: count}, ...,year: {hour: count, ...,hour: count}
time_dict = {}
for i in range(len(file['rows'])):
    hour = str(file['rows'][i]['key'][1])
    count = int(file['rows'][i]['value']['count'])
    time_dict[hour] = count

total = sum(time_dict.values())
print(time_dict)
print(total)

# {hour: %count, ..., hour: %count}, ...,year: {hour: %count, ...,hour: %count}
percent = {}
for hour in time_dict.keys():
    percent[hour] = '{0:.4f}'.format(time_dict[hour] / total)

print(percent)
description = "Data in terms of the number of tweets per hour in 2018"
chart = "Line Chart"
city = "Sydney"

output = {'City': city,'Description': description, 'Chart': chart, 'Count Data': time_dict, 'Percent Data': percent}

# convert to json
json_output = json.dumps(output)
print(json_output)



