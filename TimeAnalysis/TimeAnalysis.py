import json

with open('Stream_Syd Time.json','r') as json_data:
    file = json.load(json_data)


time_dict = {}
# create dictionary in format
# {year: {hour: count, ..., hour: count}, ...,year: {hour: count, ...,hour: count}}
for i in range(len(file['rows'])):
    year = int(file['rows'][i]['key'][0])
    hour = str(file['rows'][i]['key'][1])
    count = int(file['rows'][i]['value']['count'])
    if year > 2014:
        if year not in time_dict.keys():
            time_dict[year] = {}
        if hour not in time_dict[year].keys():
            time_dict[year][hour] = count

print(time_dict)

#----------------------------------------------------

# {year(2012): totalCount, ..., year(2018): totalCount}
year_analysis = {}
for year in time_dict.keys():
    year_analysis[year] = sum(time_dict[year].values())

print(year_analysis)

#----------------------------------------------------

# {year: {hour: %count, ..., hour: %count}, ...,year: {hour: %count, ...,hour: %count}}
percent_dict = {}
for year in year_analysis.keys():
    percent_dict[year] = {}
    for hour in time_dict[year].keys():
        percent_dict[year][hour] = '{0:.3g}'.format(time_dict[year][hour] / year_analysis[year])

print(percent_dict)

#----------------------------------------------------

description = "Data in terms of the number of tweets per hour from 2014 to 2018"
chart = "Pie Chart"
city = "Sydney"

output = {'City': city,'Description': description, 'Chart': chart, 'Data': percent_dict}

# convert to json
json_output = json.dumps(output)

print(type(json_output))
print(json_output)






