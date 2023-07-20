import React, { useContext, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectQR } from "../../contexts/slices/qrSlice";
import {
  Table,
  Tag,
  Space,
  Dropdown,
  Button,
  Menu,
  Row,
  Col,
  Input,
  Modal,
  Form,
  Select,
  message,
  DatePicker,
  Popconfirm,
  Card,
  InputNumber,
  Switch,
} from "antd";
import {
  DownOutlined,
  FundViewOutlined,
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import moment from "moment";
import QRCode from "react-qr-code";
import "./ReceiveReturn.css";

const print_QR_Code = () => {
  window.print();
  window.close();
};
const QrCodePrint: React.FC<any> = (props) => {
const obj = JSON.parse(localStorage.getItem("qr") || "{}");

  return (
    <>
      <div className="print-source">
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 256,
            width: "100%",
          }}
        >
          <div className="no-printme">
            <Button
              type="primary"
              onClick={print_QR_Code}
              style={{
                marginBottom: 16,
                background: "blue",
                borderColor: "blue",
              }}
            >
              Print
            </Button>
          </div>
          {obj.map((item: any) => {
            const object = [{ QR_NO: item.QR_NO, Tag_ID: item.Tag_ID }];
            const codeJson = JSON.stringify(object);

            return (
              <>
                {"QR CODE :"} {item.QR_NO}
                <QRCode
                  value={codeJson}
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  viewBox={`0 0 256 256`}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QrCodePrint;
