from telegram.ext import Updater, CommandHandler

# Функція-обробник для команди /start
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Привіт!")

# Створення об'єкта Updater та передача токену вашого бота
updater = Updater(token='6599555098:AAHFbnqjPWXJ4yAsRZ10VaT3PAWj1qXOPPA', use_context=True)

# Створення об'єкта диспетчера та додавання обробників команд
dispatcher = updater.dispatcher
dispatcher.add_handler(CommandHandler('start', start))

# Запуск бота
updater.start_polling()
