<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * EventVersions Model
 */
class EventVersionsTable extends Table {

/**
 * Initialize method
 *
 * @param array $config The configuration for the Table.
 * @return void
 */
	public function initialize(array $config) {
		$this->table('event_versions');
		$this->displayField('name');
		$this->primaryKey('id');
		$this->addBehavior('Timestamp');

		$this->belongsTo('Chapters', [
			'foreignKey' => 'chapter_id',
		]);
		$this->belongsTo('Events', [
			'foreignKey' => 'event_id',
		]);
	}

/**
 * Default validation rules.
 *
 * @param \Cake\Validation\Validator $validator
 * @return \Cake\Validation\Validator
 */
	public function validationDefault(Validator $validator) {
		$validator
			->add('id', 'valid', ['rule' => 'numeric'])
			->allowEmpty('id', 'create')
			->validatePresence('name', 'create')
			->notEmpty('name')
			->allowEmpty('description')
			->allowEmpty('link')
			->add('sequence', 'valid', ['rule' => 'numeric'])
			->allowEmpty('sequence')
			->add('chapter_id', 'valid', ['rule' => 'numeric'])
			->validatePresence('chapter_id', 'create')
			->notEmpty('chapter_id')
			->add('event_id', 'valid', ['rule' => 'numeric'])
			->validatePresence('event_id', 'create')
			->notEmpty('event_id');

		return $validator;
	}

}
