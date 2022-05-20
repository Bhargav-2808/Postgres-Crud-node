import { pool, cli } from "../Database/database.js";

const addUser = async (request, response) => {
  const { Id, name, age, address, salary, joindate } = request.body;
  try {
    const result = await cli.query(
      `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (${Id},'${name}',${age},'${address}',${salary},'${joindate}')`
    );

    if (result) {
      response.status(200).json({
        result,
      });
    }
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

const getUser = async (request, response) => {
  try {
    const result = await cli.query("SELECT * FROM COMPANY");

    if (result) {
      response.status(200).json({
        result,
      });
    }
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userById = await cli.query(
      `SELECT * FROM COMPANY WHERE ID=${req.params.id}`
    );

    if (userById) {
      res.status(200).json({
        userById,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteU = await cli.query(
      `DELETE FROM COMPANY where Id=${req.params.id}`
    );
    if (deleteU) {
      res.status(200).json({
        deleteU,
        Success: "User Deleted",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, age, address, salary, joindate } = req.body;
    const uUser = await cli.query(`UPDATE COMPANY SET NAME='${name}', 
          AGE=${age},
          ADDRESS='${address}',
          SALARY=${salary},
          JOIN_DATE='${joindate}' WHERE ID=${req.params.id}
          `);

    if (uUser) {
      res.status(200).json({
        uUser,
        Success: "User Updated",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export { addUser, getUser, getUserById, deleteUser, updateUser };
