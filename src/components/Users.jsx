import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, List,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export function Users() {
  const user = useSelector((state) => state.auth)
  console.log(user)
  return (
    <>
    <Card>
     <CardBody>
    <p>Users</p>
  </CardBody>
    </Card>
    <Card>
     <CardBody>
     <TableContainer>
  <Table variant='simple' size='lg'>
    <Thead>
      <Tr>
        <Th>Username</Th>
        <Th>Password</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
      user.map((item,index) => {
        return(
          <Tr key={index}>
          <Td>{item.username}</Td>
          <Td>{item.password}</Td>
        </Tr>
        )
      })
    }
    </Tbody>
  </Table>
</TableContainer>
  </CardBody>
    </Card>
    </>
  );
}