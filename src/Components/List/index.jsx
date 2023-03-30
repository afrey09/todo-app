import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Badge, Card, CloseButton, Group, Text, Pagination } from '@mantine/core';

const List = ({ list, toggleComplete, deleteItem }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const { pageItems, showComplete } = useContext(SettingsContext);


  // What do we need for pagination
  // displayItems (things that are renderable)
  const displayItems = showComplete ? list : list.filter((item) => !item.complete)
  const firstItem = (currentPage - 1) * pageItems;
  const lastItem = currentPage + pageItems;
  const totalPages = Math.ceil(list.length / pageItems);
  console.log('TOTAL PAGES ------>>>>>>', totalPages)
  // need a display list ( this is a list of "pageItems")
  const finalDisplayItems = displayItems.slice(firstItem, lastItem);


  return (
    <>
      {finalDisplayItems.map(item => (
        <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <Badge onClick={() => toggleComplete(item.id)}
                  color={item.complete ? 'red' : 'blue'}
                  variant="filled"
                  m="3px">
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <CloseButton
                onClick={() => deleteItem(item.id)}
                title="Close Todo Item"
              />
            </Group>
          </Card.Section>
          <Text mt="sm">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
        // <div key={item.id}>
        //   <p></p>
        //   <p><small>Assigned to: {item.assignee}</small></p>
        //   <p><small>Difficulty: {item.difficulty}</small></p>
        //   <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        //   <hr />
        // </div>
      ))}

      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={(value) => setCurrentPage(value)}
      />

    </>
  )
}

export default List;