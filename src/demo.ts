import { QMainWindow, WidgetEventTypes, QPushButton, QApplication } from './index';

const win = new QMainWindow();
win.addEventListener(WidgetEventTypes.WindowStateChange, () => {
    console.log('Window state change');
});
const btn = new QPushButton();
btn.setText('Quit');
btn.addEventListener('clicked', () => {
    QApplication.instance().exit(1);
});
win.setCentralWidget(btn);
win.show();
(global as any).win = win;

setInterval(() => {
    console.log('asdasd');
}, 1000);
