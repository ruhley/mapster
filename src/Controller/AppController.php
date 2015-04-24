<?php
namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Event\Event;
use Cake\Utility\Inflector;

/**
 * Application Controller
 *
 */
class AppController extends Controller {

    public $components = [
        //Cake Components
        'RequestHandler',
        //Custom Components
        'Request', 'Response', 'Model'
    ];

    public function beforeFilter(Event $event) {
        $this->RequestHandler->renderAs($this, 'json');
        $this->Response->preflight();
        parent::beforeFilter($event);
    }

    public function index() {
        try {
            $this->request->allowMethod(['get']);
            $modelName = lcfirst($this->Model->getModelName());

            $settings = $this->Request->getPaginatorSettings();
            $query = $this->Model->getModel()->find('all', $settings['settings'])->contain($settings['contains']);
            $results = [$modelName => $query->toArray()];

            // sideloading
            foreach ($results[$modelName] as $i => $row) {
                $row_data = $row->toArray();

                foreach ($row_data as $j => $cell) {
                    if (!empty($cell)) {
                        if (is_array($cell)) {
                            $j_plurale = Inflector::pluralize($j);

                            if (!array_key_exists($j_plurale, $results)) {
                                $results[$j_plurale] = [];
                            }

                            if (array_key_exists('id', $cell)) {
                                $exists = false;
                                foreach ($results[$j_plurale] as $k => $side) {
                                    if (array_key_exists('id', $cell)) {
                                        if ($side['id'] === $cell['id']) {
                                            $exists = true;
                                            break;
                                        }
                                    }
                                }

                                if (!$exists) {
                                    array_push($results[$j_plurale], $cell);
                                }

                                unset($results[$modelName][$i][$j]);
                                $results[$modelName][$i][$j] = $cell['id'];
                            } else {
                                $results[$modelName][$i][$j] = [];

                                foreach ($cell as $c) {
                                    $exists = false;
                                    foreach ($results[$j_plurale] as $k => $side) {
                                        if (array_key_exists('id', $c)) {
                                            if ($side['id'] === $c['id']) {
                                                $exists = true;
                                                break;
                                            }
                                        }
                                    }

                                    if (!$exists) {
                                        array_push($results[$j_plurale], $c);
                                    }

                                    array_push($results[$modelName][$i][$j], $c['id']);
                                }
                            }
                        }
                    }
                }
            }

            $this->Response->returnSuccess($results);
        } catch (Exception $e) {
            $this->Response->returnError($e->getMessage());
        }
    }

    public function view($id = null) {
        $this->request->allowMethod(['get']);
        $modelName = lcfirst($this->Model->getModelNameSingular());

        $result = [$modelName => $this->Model->getModel()->get($id)];

        $this->Response->returnSuccess($result);
    }

    public function add() {
        $this->request->allowMethod(['post']);

        $model = $this->Model->getModel();
        $entity = $model->newEntity($this->Request->parseData($this->request->data));

        $instance = $model->save($entity);

        if ($instance !== false) {
            $this->Model->saveVersion($instance->id);
            $this->Response->returnSuccess($instance, 'Item created successfully');
        } else {
            $this->Response->returnError($entity->errors(), 'There was a problem creating the item');
        }
    }

    public function edit($id = null) {
        $this->request->allowMethod(['put']);

        $model = $this->Model->getModel();
        $instance = $this->Model->getInstance($id);

        $this->Model->saveVersion($id);

        $instance = $model->patchEntity($instance, $this->Request->parseData($this->request->data));
        if ($model->save($instance)) {
            $this->Response->returnSuccess([], 'Item edited successfully');
        } else {
            $this->Response->returnError($entity->errors(), 'There was a problem editing the item');
        }
    }


    public function delete($id = null) {
        $this->request->allowMethod(['delete']);

        $model = $this->Model->getModel();
        $instance = $this->Model->getInstance($id);

        if ($model->delete($instance)) {
            $this->Response->returnSuccess(null, 'The item has been deleted.');
        } else {
            $this->Response->returnError(null, 'The item could not be deleted. Please, try again.');
        }
    }
}
?>
