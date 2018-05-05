import json

with open('Suburb_Mel_2018.json','r') as json_data:
    file = json.load(json_data)

sub_time = {}
# create dictionary in format
# {year: {hour: count, ..., hour: count}, ...,year: {hour: count, ...,hour: count}}
i = 0
while i < len(file['rows']):
    suburb = str(file['rows'][i]['key'][0])
    if suburb not in sub_time.keys():
        sub_time[suburb] = []
    for j in range(24):
        temp_hour = '{0:0=2d}'.format(j)
        hour = str(file['rows'][i]['key'][2])
        if temp_hour == hour:
            count = int(file['rows'][i]['value']['count'])
            sub_time[suburb].append(count)
        else:
            sub_time[suburb].append(0)
            continue
        i += 1

print(sub_time)


description = "the number of tweets per hour in each different suburbs in 2018"
chart = "Line Chart"
city = "Melbourne"

output = {'City': city,'Description': description, 'Chart': chart, 'Data': sub_time}

# convert to json
json_output = json.dumps(output)

print(type(json_output))
print(json_output)






