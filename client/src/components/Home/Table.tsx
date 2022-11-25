import {
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import React, { useEffect } from "react";
import { dateToISO } from "../../common/dates";
import { Operation } from "../../common/types";
import httpService from "../../services/httpService";
import { useNavigate } from "react-router-dom";

function OperationsTable() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const getOperations = async () => {
    const res = await httpService.get("/operations");
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getOperations();
  }, []);
  const ActionButton = ({ children }: any, {onClick} : any) => {
    return (
      <Button
        onClick={onClick}
        sx={{
          m: 0,
          p: 0,
          height: 30,
          width: "fit-content",
        }}
      >
        {children}
      </Button>
    );
  };
  const StyledTableCell = ({ children }: any) => {
    return (
      <TableCell
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          fontSize: 18,
        }}
      >
        {children}
      </TableCell>
    );
  };
  return (
      
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 800,
          margin: "auto",
         

        }}
      >
        <Box sx={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           bgcolor: '#121212'
        }}>
          <Button onClick={() => navigate('/create')} variant="contained" sx={{
          my: 2,
          alignSelf: "flex-end",
                }}>+</Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Concepto</StyledTableCell>
              <StyledTableCell>Monto</StyledTableCell>
              <StyledTableCell>Fecha</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((operation: Operation) => (
              <TableRow key={operation.id}>
                <TableCell>
                  <Typography>{operation.concept}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{operation.amount}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{dateToISO(operation.date)}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <ActionButton>
                    <DeleteIcon
                      sx={{
                        color: "error.main",
                      }}
                    />
                  </ActionButton>
                  <ActionButton>
                    <ModeEditIcon
                      sx={{
                        color: "warning.main",
                      }}
                    />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
  );
}

export default OperationsTable;
