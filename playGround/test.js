const chalk = require('chalk');
const ListNode = require('./ListNode');

var removeElements = function(head, val, depth) {
  console.log(
    chalk.cyan(
      '--'.repeat(depth) + `Call: remove ${val} in ${head && head.toString()}`
    )
  );

  if (head === null) {
    console.log(chalk.green('--'.repeat(depth) + 'Return: ' + head));
    return null;
  }

  const res = removeElements(head.next, val, depth + 1);
  console.log(
    chalk.yellow(
      '--'.repeat(depth) + `After remove ${val}: ${res && res.toString()}`
    )
  );

  let ret;
  if (head.val === val) {
    ret = res;
  } else {
    head.next = res;
    ret = head;
  }
  console.log(
    chalk.green('--'.repeat(depth) + `Return: ${ret && ret.toString()}`)
  );
  return ret;
};

const head = new ListNode([6, 7, 8]);
const val = 7;
const result = removeElements(head, val, 0);
