
import { loginWithAuthToken } from "@evex/linejs";

import { FileStorage } from "@evex/linejs/storage";
import fs from 'fs/promises';
import { existsSync } from 'fs';

const authtoken = process.env.MY_TOKEN;

const client = await loginWithAuthToken(authtoken, {
    device: "DESKTOPWIN",
    storage: new FileStorage("./storage.json"),
});

console.log("ログイン完了");
