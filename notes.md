So from the top level, the application will import all the adventure info from a json file, and then build out the page as needed, assigning proper sections and sub-sections. This way, the json file is the only thing that will have to be updated to add stuff to the adventure. So it goes

App
    Splashpage
        for each section -> AdventureSection(array = pertinent section)
            for each entry in array -> SubSection(msg is array entry)